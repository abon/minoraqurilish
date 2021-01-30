import './Footer.css'

const Footer = () => {
    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <span>БИЗНИНГ МАНЗИЛ</span>
                        <br />
                        <hr />
                        <small className='text-muted address'>180120, Қашқадарё вилояти, Қарши шаҳри Шайхали қўрғончаси, Қарши-Косон йўли 8 км 1-уй</small>
                    </div>
                    <div className="col">
                        <span>ИШ ТАРТИБИ</span>
                        <br />
                        <hr />
                        <small className='text-muted address'>Иш кунлари: душанбадан жумагача.
                      <br />  Дам олиш кунлари: шанба ва якшанба.
                      <br /> 08:00 дан 17:00 гача.
                Тушлик: 12:00 дан 13:00 гача.</small>
                    </div>
                    <div className="col">
                        <span>ФАКС ВА КАНЦЕЛЯРИЯ</span>
                        <br />
                        <hr />
                        <small className='text-muted address'>

                            Ишонч телефони: +998 (99) 042-96-48 <br />
                    Девонхона: +998 (99) 042-96-48 <br />
                    Бизнинг почта манзилимиз: mqe_aj@mail.ru</small>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm text-muted">
                        &copy;{new Date().getFullYear()} "MINORA QURISH EKSPEDISIYASI" AJ
          </p>
                </div>
            </div>
        </div>

    )
}

export default Footer
