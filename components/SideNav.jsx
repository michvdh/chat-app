import classes from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <section className={`${classes['side-nav']}`}>
      <div className={`${classes.container}`}>
        <button>Account</button>
        <button>Logout</button>
      </div>
    </section>
  )
}

export default SideNav;