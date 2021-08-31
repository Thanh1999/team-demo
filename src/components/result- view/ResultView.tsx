import Partner from "../../model/Partner";
import User from "../../model/User";
import "./ResultView.scss";

interface IResultView {
    user: User;
    partner: Partner;
}

const ResultView: React.FC<IResultView> = ({ user, partner }) => {
    console.log("Result view is created");
    return <div className="result">
        <h2>Congratulation {user.name}, {user.age} years old</h2>
        <h3>Your girl friend will be <span>{partner.name}</span></h3>
        <div className="image">
            <img src={partner.image.toString()} alt={partner.name.toString()} />
        </div>
    </div>
}

export default ResultView;