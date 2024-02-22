const form = document.getElementById("write-form");

//루트페이지로 돌아가게 하는 것
const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  //세계 시간 기준으로
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data == "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener("submit", handleSubmitForm);