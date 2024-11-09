function Todoinsert({onInsert}) {

  const onSubmit = (e) => {
    onInsert();
    e.preventDefault();
  }

    return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력하세요."/>
      <button type="submit">입력</button>
    </form>
  );
}

export default Todoinsert;