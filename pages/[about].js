import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
function about() {
  const [value, setValue] = useState("값을 입력합니다");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className={styles.main}>
      <div>
        <h1>about 페이지 입니다</h1>
      </div>

      <div>
        <p>아래 input에 값을 넣으면 값이 바뀝니다</p>
        <p>: {value}</p>
      </div>

      <div>
        <input type="text" onChange={changeValue} value={value} />
      </div>

      <div>
        <Link href="/">Main 페이지로 이동</Link>
      </div>
    </main>
  );
}

export default about;
