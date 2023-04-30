import React from "react"
import { cx } from "classix"

type Props = {
	children: JSX.Element
}

const layoutStyle = cx(
	"flex",
	"justify-center",
	"min-h-screen",
	"max-h-window",
	"bg-[#203038]"
)

const Layout = (props: Props) => {
	return <div className={layoutStyle}>{props.children}</div>
}

export default Layout
