import { site, whatsappUrl } from '../config'

function CallToAction() {
  return (
    <section id="contato" className="section container cta">
      <h2 className="section__title">Pronto para começar?</h2>
      <p className="section__subtitle">Fale com a nossa equipe e tire suas dúvidas.</p>
      <div className="cta__actions">
        <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Fale conosco no WhatsApp
        </a>
        <a className="button button--outline" href={`mailto:${site.email}`}>
          Enviar e-mail
        </a>
      </div>
    </section>
  )
}

export default CallToAction
