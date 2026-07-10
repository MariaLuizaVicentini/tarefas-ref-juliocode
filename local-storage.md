# STORAGE

O QUE É?
- Storage é a área de armazenamento disponível no navegador.
- Ela permite que aplicações armazenem informações diretamente no navegador do usuário (client-side).
- Essas informações podem ser consultadas, alteradas e removidas pela própria aplicação.
- No DevTools, a seção **Application > Storage** reúne os tipos de armazenamento disponíveis no navegador.

TIPOS DE STORAGE
- localStorage
- sessionStorage


# LOCAL STORAGE

O QUE É?
- O localStorage é uma área de armazenamento permanente do navegador.
- É como um pequeno banco de dados no client-side, com algumas limitações.
- Os dados permanecem armazenados até serem removidos pela aplicação ou pelo usuário.

OS DADOS PERMANECEM APÓS
- Atualizar a página (F5).
- Fechar o navegador.
- Reiniciar o computador.

EXEMPLOS DE USO
- Tema claro/escuro.
- Idioma da aplicação.
- Preferências do usuário.
- Carrinho de compras.
- Token de autenticação (Bearer).

ONDE OS DADOS FICAM?
- No navegador do usuário.
- Não ficam armazenados no servidor.
- Cada site possui seu próprio localStorage.

COMO VISUALIZAR?
- Abrir o DevTools (F12).
- Ir até a aba **Application**.
- No menu lateral, selecionar **Local Storage**.
- Escolher o domínio da aplicação.
- Os dados são exibidos em formato de chave (Key) e valor (Value).

COMO ACESSAR NO CÓDIGO?
- O navegador disponibiliza o objeto `localStorage`.

PROPRIEDADES
- length → quantidade de itens armazenados.

MÉTODOS
- setItem() → salva ou atualiza um valor.
- getItem() → recupera um valor.
- removeItem() → remove um item.
- clear() → remove todos os itens.
- key() → retorna a chave de um item pela posição.

OBSERVAÇÕES
- Armazena apenas strings.
- Objetos e arrays precisam ser convertidos para string antes de serem armazenados, e se forem tratados no codigo precisam ser transformados em objeto para manipulacao.


# SESSION STORAGE

O QUE É?
- O sessionStorage é uma área de armazenamento temporário do navegador.
- Seu funcionamento é semelhante ao localStorage.
- A diferença é que os dados existem apenas durante a sessão da aba.

OS DADOS PERMANECEM APÓS
- Atualizar a página (F5).

OS DADOS SÃO REMOVIDOS APÓS
- Fechar a aba ou a janela do navegador.

EXEMPLOS DE USO
- Dados temporários de um formulário.
- Informações utilizadas apenas durante a navegação.
- Estados que não precisam ser mantidos após o usuário encerrar a sessão.

ONDE OS DADOS FICAM?
- No navegador do usuário.
- Não ficam armazenados no servidor.
- Cada aba possui seu próprio sessionStorage.

COMO VISUALIZAR?
- Abrir o DevTools (F12).
- Ir até a aba **Application**.
- No menu lateral, selecionar **Session Storage**.
- Escolher o domínio da aplicação.

COMO ACESSAR NO CÓDIGO?
- O navegador disponibiliza o objeto `sessionStorage`.

PROPRIEDADES
- length → quantidade de itens armazenados.

MÉTODOS
- setItem()
- getItem()
- removeItem()
- clear()
- key()


# RESUMO

Storage
- Área de armazenamento disponível no navegador.

localStorage
- Armazenamento permanente.
- Compartilhado entre as abas do mesmo site.
- Pode ser visualizado pelo DevTools em **Application > Local Storage**.

sessionStorage
- Armazenamento temporário.
- Existe apenas durante a sessão da aba.
- Pode ser visualizado pelo DevTools em **Application > Session Storage**.