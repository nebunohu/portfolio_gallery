import React from "react";
import { 
	Link,
	useMatch,
 } from 'react-router-dom';

// Images

// Utils
import { SERVER_URL } from '../../utils/config';


export default function ArtSection() {
	const [data, setData] = React.useState([]);
	
	React.useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(`${SERVER_URL}/static/art/data.json`);
				if(res.ok) {
					const data = await res.json();
					setData(data.data);
				}	else {
					throw new Error('Fetch error - Status not OK');
				}
			} catch {
				console.log(Error.message);
			}
		}

		getData();
	}, []);

	function onClickHandler(item) {
		
	}

  return (
    <>
      <img className="bg-eye" src="../images/eye2.png" alt="" />
      <section className="projects">
				{
					data.map((el, index) => {
						return (
							<div className="projects__item" onClick={onClickHandler(el)} key={index}>
								<Link to={`${el.url}`}>
										<div className="projects__name">{el.name}</div>
										<div className="projects__year">{el.year}</div>
										<img className="projects__image" src={el.cover.src} alt="" />
								</Link>
							</div>
						);
					})
				}
    	</section>
    </>
  );
}