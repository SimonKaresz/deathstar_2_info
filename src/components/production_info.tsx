export const Production = () => {
  return (
    <>
      <h1 className="table-header my-6 text-center text-2xl text-sky-600">
        Production information
      </h1>
      <table className="w-full table-fixed text-white">
        <tr>
          <th>Manufacturer</th>
          <td>
            <ul className="mx-6 text-sm">
              <li>Kuat Drive Yards</li>
              <li>Sienar Fleet Systems</li>
              <li>Imperial Military Department of Advance Weapons Research</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Class</th>
          <td>
            <ul className="mx-6 text-sm">
              <li className="list-none">Space battle station</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Cost</th>
          <td>
            <ul className="mx-6 text-sm">
              <li className="list-none">Over 1 trillion galactic credits</li>
            </ul>
          </td>
        </tr>
      </table>
    </>
  );
};
