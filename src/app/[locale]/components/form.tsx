import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormLabel } from "@mui/material";
import { useTranslations } from "next-intl";

import Box from "@mui/material/Box";
const requirement = ["請選擇", "租賃", "借用", "買賣", "交換"];
export default function Form() {
  const t = useTranslations();
  return (
    <>
      <Box sx={{ width: "100vw", maxWidth: "100%", m: 1 }}>
        <form className="flex flex-col ">
          <FormControl fullWidth sx={{ mb: 2, pr: 1 }}>
            <FormLabel>*{t("contact_name")}</FormLabel>
            <TextField
              type="text"
              size="small"
              variant="outlined"
              color="primary"
              placeholder={`${t("contact_input")}`}
            ></TextField>
          </FormControl>
          <div className="flex flex-row">
            <FormControl sx={{ width: "50%", mb: 2, pr: 1 }}>
              <FormLabel>*{t("contact_comapny")}</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                placeholder={`${t("contact_input")}`}
              ></TextField>
            </FormControl>
            <FormControl sx={{ width: "50%", mb: 2, pr: 1 }}>
              <FormLabel>*{t("contact_career")}</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                placeholder={`${t("contact_input")}`}
              ></TextField>
            </FormControl>
          </div>
          <div className="flex flex-row">
            <FormControl sx={{ width: "50%", mb: 2, pr: 1 }}>
              <FormLabel>*{t("contact_website")}</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                placeholder={`${t("contact_input")}`}
              ></TextField>
            </FormControl>
            <FormControl sx={{ width: "50%", mb: 2, pr: 1 }}>
              <FormLabel>*{t("contact_country")}</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                placeholder={`${t("contact_input")}`}
              ></TextField>
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ mb: 2, pr: 1 }}>
            <FormLabel>*{t("contact_email")}</FormLabel>
            <TextField
              type="text"
              size="small"
              variant="outlined"
              color="primary"
              placeholder={`${t("contact_input")}`}
            ></TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2, pr: 1 }}>
            <FormLabel>*{t("contact_requirement")}</FormLabel>
            <TextField
              select
              size="small"
              variant="outlined"
              color="primary"
              defaultValue={`${t("contact_input")}`}
            >
              {requirement.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2, pr: 1 }}>
            <FormLabel>*{t("contact_message")}</FormLabel>
            <TextField
              type="text"
              size="small"
              variant="outlined"
              color="primary"
              placeholder={`${t("contact_input")}`}
              multiline
              rows={5}
            ></TextField>
          </FormControl>
          <Button>Submit</Button>
        </form>
      </Box>
    </>
  );
}
