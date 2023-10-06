import PropTypes from 'prop-types'


export const FeedIdentity = ({userName, userTitle}) => {

  return(
    <>
    <article>
      <section>
        <div></div>
        <a>{userName}</a>
        <p>{userTitle}</p>
      </section>
      <section>
        <div>
          <p>Insignias</p>
          <p>Ver progreso</p>
        </div>
        <div></div>
      </section>
    </article>
    </>
  )
}

FeedIdentity.propTypes = {
  userName: PropTypes.string,
  userTitle: PropTypes.string,
}