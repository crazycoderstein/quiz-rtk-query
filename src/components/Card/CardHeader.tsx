import React from "react"
import { cx } from "classix"

type Props = {
	children: React.ReactNode
}

const style = cx("font-bold", "text-2xl")

const CardHeader = (props: Props) => {
	return <div className={style}>{props.children}</div>
}

export default CardHeader
