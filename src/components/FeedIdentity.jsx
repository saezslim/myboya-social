import PropTypes from 'prop-types'
import style from '../style/FeedIdentity.module.css'


export const FeedIdentity = ({userName, userTitle}) => {

  return(
    <>
    <article className={`${style[`feed-identity`]}  col`}>
      <section className={`${style[`feed-identity-profile`]} col`}>
        <div></div>
        <a className={`${style[`user-name`]}`}>{userName}</a>
        <p className={`${style[`user-title`]}`}>{userTitle}</p>
      </section>
      <section className={`row spar ${style[`user-badge`]}`}>
        <a href="" className={`row spar ${style[`user-badge-anchor`]}`}>
          <div className={`alflexstart col ${style[`user-badge-text`]}`}>
            <p className={`${style[`user-badge__badge`]}`}>Insignias</p>
            <p className={`${style[`user-badge__progress`]}`}>Ver progreso</p>
          </div>
        
        <div>hola</div>
        </a>
      </section>
    </article>
    </>
  )
}

FeedIdentity.propTypes = {
  userName: PropTypes.string,
  userTitle: PropTypes.string,
}