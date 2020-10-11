import React from 'react'
import './footer.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
function Footer() {
    return (
        <div className="footer flex justify-content-center">
            <p className="flex">
                This website if made for education purpose - with
                <span className="favorite-icon"><FavoriteIcon /></span>
                from
                <a href="https://github.com/codevipin" className="author-name">Vipin Verma</a>
            </p>
        </div>
    )
}

export default Footer
