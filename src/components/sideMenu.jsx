import React from "react";

function sideMenu() {
	return (
		<div className="w-96 h-20 px-20 py-4 bg-white border-b border-zinc-200 justify-start items-center gap-12 inline-flex">
			<div className="grow shrink basis-0 h-10 justify-start items-center gap-4 flex">
				<div className="w-16 h-10 relative" />
			</div>
			<div className="justify-start items-start gap-1 flex">
				<div className="justify-center items-center flex" />
				<div className="flex-col justify-center items-end inline-flex">
					<div className="text-zinc-500 text-2xl font-bold font-['Roboto'] leading-relaxed">
						SwiftSolve
					</div>
					<div></div>
				</div>
			</div>
			<div className="grow shrink basis-0 h-12 justify-end items-center flex">
				<div className="w-12 h-12 px-2 py-4 justify-center items-center gap-4 flex">
					<div className="w-6 h-6 relative" />
					<div className="px-1.5 py-px bg-red-600 rounded-xl justify-center items-center gap-2.5 flex">
						<div className="text-center text-white text-xs font-normal font-['Roboto'] leading-none">
							9
						</div>
					</div>
				</div>
				<div className="w-12 h-12 bg-slate-100 rounded-full justify-center items-center gap-2.5 flex">
					<div className="w-6 h-6 relative" />
				</div>
			</div>
		</div>
	);
}

export default sideMenu;
