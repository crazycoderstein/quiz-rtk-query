import React from "react"
import { cx } from "classix"

type Props = {
	children: React.ReactNode
}

const style = cx("text-xl")

const CardBody = (props: Props) => {
	return <div className={style}>{props.children}</div>
}

export default CardBody
