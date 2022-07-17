type BaseRoute = {
	path: string;
	menu: 
		false 
		| {
			icon: false | JSX.Element
			name: string;
		}
}

type EndRoute = BaseRoute & {
	group: false;
	content: React.FC;
	subRoutes: false;
}

type GroupRoute = BaseRoute & {
	group: true;
	content: false | React.FC;
	subRoutes: (EndRoute | GroupRoute )[];
}

export type Route = EndRoute | GroupRoute;