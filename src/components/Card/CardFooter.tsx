import React from "react"

type Props = {
	children: React.ReactNode
}

const CardFooter = (props: Props) => {
	return <div>{props.children}</div>
}

export default CardFooter
