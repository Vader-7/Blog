import React from 'react';


export const Articles = () => {
    return (
        <>
            <article className="article-item">
                <div className='mask'>
                    <img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="" />
                </div>
                <div className="data">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description">tylerxd.es</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </div>
            </article>

            <article className="article-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">xd.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="article-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">tyleresweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="article-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">asweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

        </>
    )
}
