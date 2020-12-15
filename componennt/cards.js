import {
  SmileOutlined,
  RestOutlined,
  GiftOutlined,
  CarOutlined,
  InboxOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Cards = () => {
  return (
    <section className="cards">
      <div className="card">
        <SmileOutlined />
        <h5>Peace of Mind</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>

      <div className="card">
        <RestOutlined />
        <h5>Coffee Breaks</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>

      <div className="card">
        <GiftOutlined />
        <h5>Rewards</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>

      <div className="card">
        <CarOutlined />
        <h5>Delivery</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>

      <div className="card">
        <InboxOutlined />
        <h5>Inbox</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>

      <div className="card">
        <SettingOutlined />
        <h5>Settings</h5>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </small>
      </div>
    </section>
  );
};
export default Cards;
