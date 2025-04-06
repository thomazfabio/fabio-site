# 🌐 site-a

Site institucional hospedado em uma VPS com Nginx via Docker.

![Docker](https://img.shields.io/badge/dockerized-blue?style=flat-square&logo=docker)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-production-brightgreen?style=flat-square)

---

## 📁 Sobre o Projeto

Este repositório contém o código-fonte do meu site pessoal oque esta em produção é **site-a**, um site estático moderno hospedado em uma **VPS** com **Nginx** dentro de um container **Docker**. Ideal para páginas institucionais, portfólios ou landing pages.

---

## ⚙️ Requisitos

- Docker instalado (versão 20+)
- Docker Compose (opcional)
- Acesso root/SSH à VPS
- Porta `80` liberada no firewall

---

## 🧱 Estrutura do Projeto

```bash
.
├── site-a/
│   ├── index.html
│   ├── css/
│   └── js/
├── nginx.conf
└── README.md
```

## 🛠️ Configuração do Nginx

Exemplo de `nginx.conf`:

```nginx
events {}

http {
    server {
        listen 80;
        server_name site-a.local;

        root /usr/share/nginx/html/site-a;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

> 🔧 Substitua `site-a.local` pelo domínio real ou IP da sua VPS.

---

## 🐳 Comandos Docker

### 📦 Rodar o container

```bash
docker run --name site-a-nginx -p 80:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $(pwd):/usr/share/nginx/html:ro \
  -d nginx
```

### 🌍 Acesso local

Adicione ao `/etc/hosts`:

```bash
127.0.0.1 site-a.local
```

Acesse:

```
http://site-a.local
```

---

## 🚀 Deploy na VPS

1. Acesse via SSH:

```bash
ssh usuario@ip-da-vps
```

2. Clone o repositório:

```bash
git clone https://github.com/seuusuario/site-a.git
cd site-a
```

3. Execute o container:

```bash
docker run --name site-a-nginx -p 80:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $(pwd):/usr/share/nginx/html:ro \
  -d nginx
```

4. Acesse via navegador:

```
http://ip-da-vps
```

---

## 📦 (Opcional) Docker Compose

Crie um `docker-compose.yml`:

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:latest
    container_name: site-a-nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./:/usr/share/nginx/html:ro
```

Execute com:

```bash
docker-compose up -d
```

---

## 📝 Licença

MIT License

> Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software para usar, copiar, modificar, mesclar, publicar, distribuir e/ou vender, desde que mantenha os avisos de licença originais.

---

Feito com ❤️ usando Nginx + Docker 