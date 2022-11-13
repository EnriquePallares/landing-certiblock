import React from 'react';
export interface LastPostsInterface {}

const LastPosts: React.FC<LastPostsInterface> = () => {
  const optionsFilter = [
    {
      text: 'Casos de éxito',
      value: 'E',
    },
    {
      text: 'Educación',
      value: 'K',
    },
    {
      text: 'Noticias',
      value: 'N',
    },
  ];

  const posts = [
	{
		title: 'Cómo hacer tu primera certificación',
		image: '',
		author: 'Pepito Perez',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
  ]

  return (
    <div className="relative bg-light-gray rounded-t-[4.5rem] extend-bg-color p-4">
      <div className="flex flex-row justify-between">
        <div className="flex-col">
          <h3 className="text-3xl">Última publicaciónes</h3>
          <ul className="flex gap-2">
            {optionsFilter.map((item: { text: string; value: string }) => (
              <li>
                <label className="cursor-pointer">
                  <input type="radio" className="peer sr-only" name="pricing" />
                  <div className="rounded-[25px] bg-white p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                    {item.text}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <label className="cursor-pointer">
            <input type="radio" className="peer sr-only" name="pricing" />
            <div className="rounded-[25px] bg-white p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
              Todas las publicaciones
            </div>
          </label>
        </div>
      </div>
	  <div className="grid grid-cols-4">
		{

		}
	  </div>
    </div>
  );
};

export default LastPosts;
