import React from 'react'

function Toggle ({item, index, classToggle}) {

    
	return (
        
		<div
			className={"faq " + (item.open ? 'open' : '')}
			key={index}
			onClick={() => classToggle(index)}
       
		>
			<div className="faq-question">
				{item.question}
			</div>
			<div className="faq-answer">
				{item.answer}
			</div>
		</div>
	)
}

export default Toggle

