export const Location = () => {
  return (
    <>
      <h1 className="table-header my-6 text-center text-2xl text-sky-600">
        Location information
      </h1>
      <table className="w-full table-fixed text-white">
        <tr>
          <th>Region</th>
          <td>
            <ul className="mx-6 text-sm">
              <li className="list-none">Outer Rim Territories</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Sector</th>
          <td>
            <ul className="mx-6 text-sm">
              <li className="list-none">Moddell sector</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>System</th>
          <td>
            <ul className="mx-6 text-sm">
              <li className="list-none">Endor system</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Moon</th>
          <td>
            <ul className="mx-6 text-sm">
              <li>Endor</li>
              <li>Kef Bir(as Deathstar ruins)</li>
            </ul>
          </td>
        </tr>
      </table>
    </>
  );
};
