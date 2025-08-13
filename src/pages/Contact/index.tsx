import { Layout } from '../../design/templates/Layout';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Gracias! Mensaje enviado.');
  };

  return (
    <Layout>
      <main>
        <section className="mbr-section form1 cid-r1oUG6ztqG" id="form1-15">
          <div className="container">
            <div className="row justify-content-center">
              <div className="title col-12 col-lg-8">
                <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">Formulario de Contacto</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="media-container-column col-lg-8">
                <form className="mbr-form" onSubmit={handleSubmit}>
                  <div className="row row-sm-offset">
                    <div className="col-md-4 multi-horizontal">
                      <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7" htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" name="name" required id="name" />
                      </div>
                    </div>
                    <div className="col-md-4 multi-horizontal">
                      <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7" htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" required id="email" />
                      </div>
                    </div>
                    <div className="col-md-4 multi-horizontal">
                      <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7" htmlFor="phone">Teléfono</label>
                        <input type="tel" className="form-control" name="phone" id="phone" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label mbr-fonts-style display-7" htmlFor="message">Mensaje</label>
                    <textarea className="form-control" name="message" rows={7} id="message"></textarea>
                  </div>
                  <span className="input-group-btn"><button type="submit" className="btn btn-primary btn-form display-4">Enviar</button></span>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}