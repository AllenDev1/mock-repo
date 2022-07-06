import React from "react";
import "../scss/linkappformessage.scss";
import Whatsapp from "../Asset/whatsapp.svg";
import viber from "../Asset/viber.svg";
const Appformessage = () => {
	return (
		<>
			<div className="link-app-for-message">
				<div className="link-message">
					<h5>Link App for Messages</h5>
					<div className="link-viber-whatsapp">
						<div className="Whatsapp-link">
							<div className="whatsapp-contain">
								<img src={Whatsapp} />
								<p>Whatsapp</p>
							</div>
							<div className="whatsapp-button">
								<button>Link</button>
							</div>
						</div>

						<div className="viber-link">
							<div className="viber-contain">
								<img src={viber} />
								<p>Viber</p>
							</div>
							<div className="viber-button">
								<button>Link</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Appformessage;
