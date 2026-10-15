import { navLinks, site, whatsappUrl } from '../config'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <strong className="site-footer__brand">{site.brand}</strong>
          <p>{site.tagline}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="site-footer__heading">Navegação</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__heading">Contato</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Redes sociais</h2>
          <ul>
            {site.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <small>
          © {new Date().getFullYear()} {site.brand}. Todos os direitos reservados. CNPJ {site.cnpj}
        </small>
      </div>
    </footer>
  )
}

export default Footer
