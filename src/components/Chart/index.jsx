import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import { ReactComponent as Loading } from "../../assets/images/loading.svg";
import styles from "./Chart.module.scss";
import { useDispatch } from "react-redux";
import {
  createChart,
  sendMessageChart,
} from "../../store/chart-service/actions";

const Chart = () => {
  const [idChart, setIdShart] = useState(0);
  const [listChart, setListChart] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const createNewChart = async () => {
    setIsLoading(true);
    const response = await dispatch(createChart());
    setIdShart(response.data.id);
    setListChart(response.data.chat);
    setIsLoading(false);
  };

  const handleChangeInput = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    setIsLoading(true);
    const data = await dispatch(sendMessageChart(idChart, message));
    setListChart(data.data.chat);
    setMessage("");
    setIsLoading(false);
  };

  const lastIndex = listChart.length - 1;

  return (
    <div className={styles.wrapper}>
      {listChart.length !== 0 ? (
        <div className={styles.chart_list}>
          {listChart?.map((item, index) => (
            <div
              className={
                item.role === "user"
                  ? styles.chart_item_user
                  : styles.chart_item_doctor
              }
              style={lastIndex === index ? { marginBottom: "10px" } : {}}
            >
              <pre>{item.message}</pre>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={styles.button_start_chart}
          onClick={() => createNewChart()}
        >
          <span>
            {isLoading ? <Loading className={styles.loading} /> : "Почати"}
          </span>
        </div>
      )}
      <div className={styles.form_input}>
        <div className={styles.chart_input}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChangeInput}
            value={message}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <div className={styles.icon} onClick={sendMessage}>
            {isLoading ? <Loading className={styles.loading} /> : <Arrow />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
