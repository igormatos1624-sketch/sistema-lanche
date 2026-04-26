// ACESSO E LOGOUT
async function fazerLogin() {
    const user = document.getElementById('auth-user').value;
    const password = document.getElementById('auth-pass').value;
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user, password })
    });
    if (res.ok) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        carregarEstoque();
    } else alert("Acesso inválido!");
}

function fazerLogout() {
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'flex';
}

async function fazerCadastro() {
    const user = document.getElementById('auth-user').value;
    const password = document.getElementById('auth-pass').value;
    await fetch('/api/cadastro', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user, password })
    });
    alert("Cadastrado com sucesso!");
}

// NAVEGAÇÃO
function abrirAba(evt, nomeAba) {
    let tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    let tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(nomeAba).style.display = "block";
    evt.currentTarget.className += " active";
    if (nomeAba === 'historico-tab') carregarHistorico();
    if (nomeAba === 'estoque-tab') carregarEstoque();
}

// ESTOQUE
async function adicionarAoEstoque() {
    const nome = document.getElementById('est-nome').value;
    const validade = document.getElementById('est-validade').value;
    if (!nome || !validade) return alert("Preencha o nome e a validade!");
    await fetch('/api/estoque', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nome, validade })
    });
    carregarEstoque();
    document.getElementById('est-nome').value = '';
    document.getElementById('est-validade').value = '';
}

async function carregarEstoque() {
    const res = await fetch('/api/estoque');
    const dados = await res.json();
    document.getElementById('tabela-estoque').innerHTML = dados.map((i, index) => 
        `<tr><td>${i.nome}</td><td>${i.validade}</td>
        <td><button class="btn-excluir" onclick="excluirEstoque(${index})">Excluir</button></td></tr>`).join('');
}

async function excluirEstoque(index) {
    if (confirm("Excluir item?")) {
        await fetch(`/api/estoque/${index}`, { method: 'DELETE' });
        carregarEstoque();
    }
}

// VENDAS E HISTÓRICO
async function vender() {
    const prod = document.getElementById('prod').value;
    const valor = document.getElementById('valor').value;
    await fetch('/api/vendas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prod, valor, data: new Date() })
    });
    alert("Venda efetuada!");
    document.getElementById('prod').value = '';
    document.getElementById('valor').value = '';
}

async function carregarHistorico() {
    const res = await fetch('/api/vendas');
    const vendas = await res.json();
    document.getElementById('corpo-historico').innerHTML = vendas.map((v, index) => `
        <tr>
            <td>${new Date(v.data).toLocaleString()}</td>
            <td>${v.prod}</td>
            <td>R$ ${parseFloat(v.valor).toFixed(2)}</td>
            <td><span class="online">Venda efetuada</span></td>
            <td><button class="btn-excluir" onclick="excluirVenda(${index})">Excluir</button></td>
        </tr>`).reverse().join('');
}

async function excluirVenda(index) {
    if (confirm("Excluir transação?")) {
        await fetch(`/api/vendas/${index}`, { method: 'DELETE' });
        carregarHistorico();
    }
}