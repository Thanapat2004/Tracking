import React from "react";
import {
  Button,
  Dialog,
  Checkbox,
  Typography,
  DialogBody,
  IconButton,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export function NotBotDialog({ open, setOpen, trackingData }) {
  const [isNotBot, setIsNotBot] = React.useState(false); 
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsNotBot((prev) => !prev); 
  };

  const handleSave = () => {
    if (isNotBot) {
      console.log("Confirmed: User is not a bot.");
      
      navigate('/tracking-status', { state: { trackingData } });
      setOpen(false); 
    } else {
      console.log("User has not confirmed they are not a bot.");
      
    }
  };

  return (
    <>
      <Dialog size="sm" open={open} handler={() => setOpen(!open)} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            ยืนยันว่าคุณไม่ใช่หุ่นยนต์ ?
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 px-2">
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="text-base font-medium">
                  ฉันไม่ใช่หุ่นยนต์
                </Typography>
              </div>
            }
            checked={isNotBot}
            onChange={handleCheckboxChange}
            containerProps={{
              className: "-mt-5",
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto bg-green-600" onClick={handleSave} disabled={!isNotBot}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default NotBotDialog;
