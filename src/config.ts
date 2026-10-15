// Dados da empresa usados em toda a página.
// TODO: substituir os valores de exemplo pelos dados reais antes de publicar.
export const site = {
  brand: 'Marca',
  tagline: 'Soluções que ajudam o seu negócio a crescer.',
  email: 'contato@marca.com.br',
  phoneDisplay: '(11) 99999-9999',
  // Somente dígitos, com DDI + DDD, no formato aceito pelo wa.me
  whatsapp: '5511999999999',
  whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais.',
  cnpj: '00.000.000/0001-00',
  address: 'São Paulo - SP',
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
}

export const navLinks = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Contato', href: '#contato' },
]

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
