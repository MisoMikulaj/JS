export default (rez) => {
    return `<h3>Rezultati pjesama:</h3>
            <ul>
              ${rez.data.map((elem) => {
                return `<li> ${elem.title}  </li>`;
              })}
            </ul>
    `;
  };
  