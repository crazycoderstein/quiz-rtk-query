import React from "react"
import { cx } from "classix"

type Props = {
	children: React.ReactNode
}

const style = cx(
	"mt-24",
	"bg-slate-300",
	"h-[40rem]",
	"w-[35rem]",
	"px-2",
	"py-10",
	"text-center",
	"max-w-sm",
	"max-h-full",
	"grid",
	"self-center"
)

const Card = (props: Props) => {
	return <div className={style}>{props.children}</div>
}

export default Card
