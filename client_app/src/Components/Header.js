import style from './css/styles.module.css'
function Header()
{
    return (
        <nav>
            <div className={style.container}>
                <p className={style.title}>To Do List</p>
            </div>
        </nav>
    )
}
export default Header;