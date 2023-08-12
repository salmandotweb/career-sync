import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectBasicInfo,
	updateBasicInfo,
} from "@/stores/slices/basic/basicInfoSlice";

const EditBasicInfo = () => {
	const basicInfo = useAppSelector(selectBasicInfo);
	const dispatch = useAppDispatch();
	return (
		<>
			<Tabs defaultValue="contacts" className="w-[100%]">
				<TabsList className="w-full mb-3">
					<TabsTrigger value="contacts" className="w-full">
						Contacts
					</TabsTrigger>
					<TabsTrigger value="links" className="w-full">
						Links
					</TabsTrigger>
					<TabsTrigger value="about" className="w-full">
						About
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="contacts"
					className="w-full flex items-start flex-col gap-5">
					<div className="grid w-full max-w-sm items-center gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							type="name"
							id="name"
							placeholder="Name"
							value={basicInfo.name}
							onChange={(e) => {
								dispatch(
									updateBasicInfo({
										...basicInfo,
										name: e.target.value,
									})
								);
							}}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-2">
						<Label htmlFor="designation">Designation</Label>
						<Input
							type="name"
							id="designation"
							placeholder="Designation"
							value={basicInfo.label}
							onChange={(e) => {
								dispatch(
									updateBasicInfo({
										...basicInfo,
										label: e.target.value,
									})
								);
							}}
						/>
					</div>
				</TabsContent>
				<TabsContent value="links" className="w-full">
					Change your password here.
				</TabsContent>
				<TabsContent value="about" className="w-full">
					Change your password here.
				</TabsContent>
			</Tabs>
		</>
	);
};

export default EditBasicInfo;
