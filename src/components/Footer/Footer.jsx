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
                        <small className='text-muted address'>100047, Ташкент шаҳар, Миробод тумани,
                        Истиқбол кўчаси, 16-уй.</small>
                    </div>
                    <div className="col">
                        <span>ИШ ТАРТИБИ</span>
                        <br />
                        <hr />
                        <small className='text-muted address'>Иш кунлари: душанбадан жумагача.
                      <br />  Дам олиш кунлари: шанба ва якшанба.
                      <br />  Иш соати: 09:00 дан 18:00 гача.
                Тушлик: 13:00 дан 14:00 гача.</small>
                    </div>
                    <div className="col">
                        <span>ФАКС ВА КАНЦЕЛЯРИЯ</span>
                        <br />
                        <hr />
                        <small className='text-muted address'>Тел.: +(99871) 233-57-57, 236-02-10 <br />

                    Девонхона: +(99871) 236-76-58 <br />
                    Ишонч телефони: +(99871) 233-28-88 <br />
                    Бизнинг почта манзилимиз: kans@ung.uz , ung@exat.uz</small>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm text-muted">
                        &copy;{new Date().getFullYear()} АО "UZBEKNEFTEGAZ"
          </p>
                </div>
            </div>
        </div>

    )
}

export default Footer
