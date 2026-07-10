import "../../App.css";
import { Star, Check, CheckBoxRounded } from '@mui/icons-material'

function Sidebar() {
  return (
    <nav className="nav-bar">
        <button className="btn-principal">
            <section>
                <CheckBoxRounded></CheckBoxRounded>
                Todas
            </section>
        </button>
        <button className="btn-principal">
            <section>
                <Check></Check>
                Completas
            </section>
        </button>
        <button className="btn-principal">
            <section>
                <Star></Star>
                Favoritas
            </section>
        </button>
    </nav>
  );
}
export default Sidebar;
