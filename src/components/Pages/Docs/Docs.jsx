import React from 'react'
import folder from '../../../assets/folder.svg'

import './Docs.css'

const Docs = () => {
    return (
        <div>
            <h1 className="docs__heading">Axborotnomalar</h1>
            <div className="docs">
                <a className='docs__links' href="https://www.mediafire.com/folder/e947yvxysl1lq">
                    <div className="docs__2020">
                        <img className="docs__folder__img" src={folder} />
                        <p className='docs__year'>2020</p>
                    </div>
                </a>
                <a className='docs__links' href="https://drive.google.com/drive/folders/1eeQTDMh8LMxqWyellzS2yZtIDBxkeVh1?usp=sharing">
                    <div className="docs__2020">
                        <img className="docs__folder__img" src={folder} />
                        <p className='docs__year'>2019</p>
                    </div>
                </a>
                <a className='docs__links' href="https://drive.google.com/drive/folders/1eeQTDMh8LMxqWyellzS2yZtIDBxkeVh1?usp=sharing">
                    <div className="docs__2020">
                        <img className="docs__folder__img" src={folder} />
                        <p className='docs__year'>2018</p>
                    </div>
                </a>
                <a className='docs__links' href="https://drive.google.com/drive/folders/1eeQTDMh8LMxqWyellzS2yZtIDBxkeVh1?usp=sharing">
                    <div className="docs__2020">
                        <img className="docs__folder__img" src={folder} />
                        <p className='docs__year'>2017</p>
                    </div>
                </a>
                <a className='docs__links' href="https://drive.google.com/drive/folders/1eeQTDMh8LMxqWyellzS2yZtIDBxkeVh1?usp=sharing">
                    <div className="docs__2020">
                        <img className="docs__folder__img" src={folder} />
                        <p className='docs__year'>2016</p>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Docs
