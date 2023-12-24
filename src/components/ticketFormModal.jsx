import React from "react";

function ticketFormModal() {
	return (
		<div className="w-96 h-96 p-12 bg-white border border-zinc-200 flex-col justify-start items-start gap-12 inline-flex">
			<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
				<div className="self-stretch h-11 flex-col justify-start items-center gap-2 flex">
					<div className="self-stretch text-zinc-800 text-5xl font-bold font-['Roboto'] leading-10">
						Ticket Title{" "}
					</div>
				</div>
				<div className="self-stretch text-zinc-800 text-lg font-normal font-['Roboto'] leading-relaxed">
					Rhoncus morbi et augue nec, in id ullamcorper at sit.{" "}
				</div>
			</div>
			<div className="h-96 flex-col justify-start items-start gap-4 flex">
				<div className="self-stretch justify-start items-start gap-4 inline-flex">
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
						<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
							<div className="self-stretch text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
								First Name
							</div>
							<div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
								<div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Roboto'] leading-snug">
									Placeholder
								</div>
							</div>
						</div>
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
						<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
							<div className="self-stretch text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
								Last Name
							</div>
							<div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
								<div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Roboto'] leading-snug">
									Placeholder
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
					<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
						<div className="self-stretch text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
							Label Name
						</div>
						<div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
							<div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Roboto'] leading-snug">
								Placeholder
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
					<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
						<div className="self-stretch text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
							Label Name
						</div>
						<div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
							<div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Roboto'] leading-snug">
								Placeholder
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
					<div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
						<div className="self-stretch text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
							Label Name
						</div>
						<div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
							<div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Roboto'] leading-snug">
								Placeholder
							</div>
							<div className="w-6 h-6 relative" />
						</div>
					</div>
				</div>
				<div className="justify-start items-center gap-2 inline-flex">
					<div className="w-5 h-5 justify-center items-center gap-2.5 flex">
						<div className="w-4 h-4 border border-neutral-900 flex-col justify-center items-center inline-flex" />
					</div>
					<div className="text-zinc-800 text-sm font-normal font-['Roboto'] leading-tight">
						Vestibulum faucibus odio vitae arcu auctor lectus.
					</div>
				</div>
				<div className="self-stretch justify-end items-center gap-4 inline-flex">
					<div className="w-36 px-3 py-4 bg-blue-600 border-2 border-blue-600 justify-center items-center flex">
						<div className="px-4 justify-center items-center gap-2.5 flex">
							<div className="text-white text-base font-medium font-['Roboto'] leading-none tracking-wide">
								Button Text
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ticketFormModal;
