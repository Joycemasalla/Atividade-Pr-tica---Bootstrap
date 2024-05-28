import styles from './Missao.module.css'
    export function Missao() {
        return(
        <body className={styles.missao}>
<div className={styles.container}>
      <div className={styles.section}>

        <p>Missão:<br></br><br></br>Nossa missão é oferecer componentes de PC de alta qualidade a preços competitivos, proporcionando uma experiência de compra online fácil, segura e rápida. Estamos comprometidos em atender às necessidades dos entusiastas de tecnologia, gamers, e profissionais de TI, fornecendo produtos confiáveis e suporte técnico especializado.</p>
      </div>

      <div className={styles.section}>

        <p><br></br>Visão:<br></br><br></br>Ser a referência número um em vendas online de componentes de PC na América Latina, reconhecida pela excelência no atendimento ao cliente, variedade de produtos e inovação contínua. Nosso objetivo é capacitar nossos clientes com as ferramentas e informações necessárias para construir e manter sistemas de computação de ponta.</p>
      </div>

      <div className={styles.section}>

        <ul className={styles.valuesList}>
         <p>Valores:</p> 
          <li><strong>Satisfação</strong>: Ser referência em vendas online de componentes de PC na América Latina, garantindo a satisfação dos clientes.</li>
          <li><strong>Qualidade</strong>: Comprometimento com a venda de produtos de marcas renomadas e de alta performance, garantindo a satisfação e confiança dos clientes.</li>
          <li><strong>Inovação</strong>: Estar sempre à frente das tendências e novidades do mercado de tecnologia, oferecendo os produtos mais recentes e inovadores.</li>
          <li><strong>Atendimento ao Cliente</strong>: Priorizar o atendimento ao cliente com equipe especializada, pronta para oferecer suporte técnico e esclarecer dúvidas.</li>
          <li><strong>Transparência</strong>: Manter uma comunicação clara e honesta com os clientes, desde a descrição dos produtos até o processo de compra e pós-venda.</li>
          <li><strong>Sustentabilidade</strong>: Adotar práticas sustentáveis em todas as etapas do negócio, desde a seleção de fornecedores até a logística, contribuindo para a preservação do meio ambiente.</li>
          <li><strong>Comunidade</strong>: Fomentar uma comunidade de entusiastas e profissionais de TI, oferecendo conteúdo educacional e oportunidades de interação e troca de conhecimento.</li>
        </ul>
      </div>
    </div>
        </body>
        )
    }
