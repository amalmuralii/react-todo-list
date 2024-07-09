const Header = ({ title }) => {

    return (
        <header >
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultParameters = {
    title:  "Groceries list"
}

export default Header