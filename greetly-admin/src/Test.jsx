import React from 'react';

function Test() {
  const data = [
    { name: 'Glenasdasddasadasdasdasddakhssdn', age: 20 },
    { name: 'Culibra', age: 30 },
    { name: 'a', age: 310 },
    { name: 'Culisdbra', age: 320 },
    { name: 'Culiddbra', age: 330 },
    { name: 'Glenasdasddasadasdasdasddakhssdn', age: 20 },
    { name: 'Culibra', age: 30 },
    { name: 'Culisdbra', age: 320 },
    { name: 'Culiddbra', age: 330 },
    { name: 'Glenasdasddasadasdasdasddakhssdn', age: 20 },
    { name: 'Culibra', age: 30 },
    { name: 'Culisdbra', age: 320 },
    { name: 'Culiddbra', age: 330 },
    { name: 'Glenasdasddasadasdasdasddakhssdn', age: 20 },
    { name: 'Culibra', age: 30 },
  ];

  return (
    <div className="overflow-hidden w-full flex justify-center">
      <div className="border border-gray-300 w-1/2">
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-center">Name</th>
              <th className="p-2 text-center">Age</th>
            </tr>
          </thead>
          <tbody className="block h-48 overflow-y-auto">
            {data.map((i, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell text-center p-2">{i.name}</td>
                <td className="table-cell text-center p-2">{i.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Test;