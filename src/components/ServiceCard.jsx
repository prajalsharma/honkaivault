import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const ServiceCard = ({ service }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="service-card text-white text-base flex flex-col cursor-pointer gap-4 p-4  rounded-lg h-full items-center justify-center font-bold bg-[#171b30]/75 hover:bg-[#171b30]/50 transition-colors text-center relative pt-16 pb-8">
          <div className="absolute -top-8  text-white service-icon p-2.5">{service.icon}</div>
          <h3>{service.title}</h3>
          <p className="text-sm text-primary-gray font-normal">{service.summary}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#000612] text-white/70 text-sm">
        <DialogTitle className="text-2xl text-white underline">{service.title}</DialogTitle>
        <DialogDescription className="sr-only">{service.tile}</DialogDescription>
        <ScrollArea className="max-h-[400px] whitespace-pre-wrap">{service.description}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceCard;
