import React from 'react';
import Tasks from './Tasks';

import style from './css/styles.module.css'
import './css/styles.css' ;

function Task()
{
    return (
        <>
             <nav>
                <div className={style.container}>
                    <p className={style.title}>To Do List</p>
                </div>
            </nav>
            <Tasks/>
            <footer>
                    <p className={style.footer}>
                        Made by @Alexis M.Rosales
                    </p>
            </footer>
        </>
    )
}
export default Task;