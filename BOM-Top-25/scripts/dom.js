const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.append(para);
para.setAttribute("class", "highlight");

const text = document.createTextNode(" - the premier source for web development knowledge.");
const linkpara = document.querySelector("p");
linkpara.append(text);

sect.append(linkpara);

