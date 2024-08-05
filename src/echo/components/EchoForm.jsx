import {
  Button,
  Checkbox,
  Container,
  Fieldset,
  Flex,
  Group,
  MultiSelect,
  NativeSelect,
  NumberInput,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./EchoForm.module.css";
import TextEditor from "../../components/TextEditor";

function EchoForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      // email: "",
      // termsOfService: false,
      MVt10: "Absent",
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = (values) => {
    console.log("printing form values");
    console.log(values);
  };
  const { MVt10 } = form.values;
  return (
    <Container className={classes.formContainer}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/* GN -> general */}
        <SimpleGrid cols={3} className={classes.padding10}>
          <NumberInput
            label="IVsd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt1")}
          />
          <NumberInput
            label="LVIDd"
            description="(3.6-5.5)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt2")}
          />
          <NumberInput
            label="LVPWd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt3")}
          />
        </SimpleGrid>
        <SimpleGrid cols={3} className={classes.padding10}>
          <NumberInput
            label="IVsd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt4")}
          />
          <NumberInput
            label="LVIDd"
            description="(3.6-5.5)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt5")}
          />
          <NumberInput
            label="LVPWd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt6")}
          />
        </SimpleGrid>
        <SimpleGrid cols={3} className={classes.padding10}>
          <NumberInput
            label="IVsd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt7")}
          />
          <NumberInput
            label="LVIDd"
            description="(3.6-5.5)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt8")}
          />
          <NumberInput
            label="LVPWd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt9")}
          />
        </SimpleGrid>
        <SimpleGrid cols={3} className={classes.padding10}>
          <NumberInput
            label="IVsd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt10")}
          />
          <NumberInput
            label="LVIDd"
            description="(3.6-5.5)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt11")}
          />
          <NumberInput
            label="LVPWd"
            description="(0.6-1.0)cm"
            placeholder="Input placeholder"
            {...form.getInputProps("GNt12")}
          />
        </SimpleGrid>
        <NativeSelect
          label="RWMA"
          description="Input description"
          data={["Absent", "Hypokinesia", "Akinesia", "Dyskinesia"]}
          {...form.getInputProps("GNt13")}
          onChange={(e) => {
            // console.log(e.target.value);
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("GNt13Container").style.display = "none";
            } else {
              document.getElementById("GNt13Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: this container will be hidden if the above select value is absent */}
        <Container style={{ display: "none" }} id="GNt13Container">
          <MultiSelect
            className={classes.padding10}
            label="BASAL LV"
            placeholder="Pick value"
            data={[
              "Anterior",
              "Anteroseptal",
              "Inferior",
              "Inferoseptal",
              "Inferolateral",
              "Anterolateral",
            ]}
            {...form.getInputProps("GNt13t1")}
          />
          <MultiSelect
            className={classes.padding10}
            label="MID LV"
            placeholder="Pick value"
            data={[
              "Anterior",
              "Anteroseptal",
              "Inferior",
              "Inferoseptal",
              "Inferolateral",
              "Anterolateral",
            ]}
            {...form.getInputProps("GNt13t2")}
          />
          <MultiSelect
            className={classes.padding10}
            label="APICAL LV"
            placeholder="Pick value"
            data={["Anterior", "Septal", "Inferior", "Lateral"]}
            {...form.getInputProps("GNt13t3")}
          />
          <MultiSelect
            className={classes.padding10}
            label="LV APEX"
            placeholder="Pick value"
            data={["Apical Cap"]}
            {...form.getInputProps("GNt13t4")}
          />
        </Container>

        {/* MV -> mitral value */}
        <Title order={2} className={classes.padding10}>
          MITRAL VALVE
        </Title>
        <NativeSelect
          className={classes.nativeSelect}
          label="Morphology"
          description="Input description"
          data={[
            "Normal",
            "Abnormal",
            "",
            "Mechanical Prosthetic Valve in Situ",
          ]}
          {...form.getInputProps("MVt1")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Normal") {
              document.getElementById("MVt1Container").style.display = "none";
            } else {
              document.getElementById("MVt1Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: this will be hidden in case of Normal */}
        <Container style={{ display: "none" }} id="MVt1Container">
          <MultiSelect
            className={classes.padding10}
            label="AML"
            placeholder="Pick value"
            data={[
              "Thickened",
              "Doming",
              "Calcified",
              "Prolapse",
              "Restricted Mobility",
              "Fixed",
              "Vegetation",
              "SAM",
            ]}
            {...form.getInputProps("MVt1t1")}
          />
          <MultiSelect
            className={classes.padding10}
            label="PML"
            placeholder="Pick value"
            data={[
              "Thickened",
              "Calcified",
              "Prolapse",
              "Restricted Mobility",
              "Fixed",
              "Vegetation",
            ]}
            {...form.getInputProps("MVt1t2")}
          />
        </Container>

        <Fieldset legend="Doppler">
          <SimpleGrid cols={3}>
            <NumberInput
              className={classes.padding10}
              label="E wave(cm/s)"
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt2")}
            />
            <NumberInput
              className={classes.padding10}
              label="A wave(cm/s)"
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt3")}
            />
            <NumberInput
              className={classes.padding10}
              label="DT"
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt4")}
            />
          </SimpleGrid>
        </Fieldset>
        <Fieldset legend="Tissue Doppler">
          <SimpleGrid cols={3}>
            <NumberInput
              className={classes.padding10}
              label='E"'
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt5")}
            />
            <NumberInput
              className={classes.padding10}
              label='A"'
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt6")}
            />
            <NumberInput
              className={classes.padding10}
              label='E/e"'
              // description="(0.6-1.0)cm"
              placeholder="Input placeholder"
              {...form.getInputProps("MVt7")}
            />
          </SimpleGrid>
        </Fieldset>
        <NativeSelect
          label="Diastolic Function"
          description="Input description"
          data={[
            "Normal",
            "Grade 1 Dysfunction",
            "Grade 2 Dysfunction",
            "Grade 3 Dysfunction",
          ]}
          {...form.getInputProps("MVt8")}
        />
        <NativeSelect
          label="Mitral Stenosis"
          description="Input description"
          data={["Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("MVt9")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("MVt9Container").style.display = "none";
            } else {
              document.getElementById("MVt9Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: this container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="MVt9Container">
          <Fieldset legend="Gradient">
            <SimpleGrid cols={3}>
              <NumberInput
                label="Peak Diastolic"
                {...form.getInputProps("MVt9t1")}
              />
              <NumberInput
                label="Mean Diastolic(mmHg)"
                {...form.getInputProps("MVt9t2")}
              />
            </SimpleGrid>
          </Fieldset>
          <Fieldset legend="MVA">
            <SimpleGrid cols={3}>
              <NumberInput
                label="By Planimetry(cmsq)"
                {...form.getInputProps("MVt9t3")}
              />
              <NumberInput
                label="By PHT(cmsq)"
                {...form.getInputProps("MVt9t4")}
              />
            </SimpleGrid>
          </Fieldset>
          <TextInput
            label="Mitral Annulus(cm)"
            {...form.getInputProps("MVt9t5")}
          />
        </Container>
        <NativeSelect
          label="Mitral Regurgitation"
          description="Input description"
          data={["Absent", "Mild", "Moderate", "Severe", "Severe Eccentric"]}
          // defaultValue="Absent"
          {...form.getInputProps("MVt10")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("MVt10Container").style.display = "none";
            } else {
              document.getElementById("MVt10Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: this container will be hidden if the value is absent */}

        <Container style={{ display: "none" }} id="MVt10Container">
          <SimpleGrid cols={3}>
            <NumberInput
              label="A4C LA Area(cmsq)"
              {...form.getInputProps("MVt10t1")}
            />
            <NumberInput
              label="JetArea(cmsq)"
              {...form.getInputProps("MVt10t2")}
            />
          </SimpleGrid>
        </Container>

        {/* AV -> aortic valve */}
        <Title className={classes.padding10} order={2}>
          AORTIC VALVE
        </Title>

        <NativeSelect
          className={classes.padding10}
          label="Morphology"
          description="Input description"
          data={[
            "Normal",
            "Abnormal",
            "Select",
            "Mechanical Prosthetic Valve in Situ",
          ]}
          {...form.getInputProps("AVt1")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Normal") {
              document.getElementById("AVt1Container").style.display = "none";
            } else {
              document.getElementById("AVt1Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: this container will be hidden if the value is Normal */}
        <Container style={{ display: "none" }} id="AVt1Container">
          <MultiSelect
            className={classes.padding10}
            // label="BASAL LV"
            placeholder="Pick value"
            data={[
              "Thickened",
              "Doming",
              "Calcification",
              "Vegetation",
              "Restricted Opening",
              "Bicuspid Aortic Valve",
            ]}
            {...form.getInputProps("AVt1t1")}
          />
        </Container>

        <NumberInput
          className={classes.padding10}
          label="Doppler"
          description="Aortic peak systolic velocity (cm/sec)"
          {...form.getInputProps("AVt2")}
        />

        <NativeSelect
          className={classes.padding10}
          label="Aortic Stenosis"
          data={["Select", "Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("AVt3")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("AVt3Container").style.display = "none";
            } else {
              document.getElementById("AVt3Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: this container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="AVt3Container">
          <Fieldset legend="Gradient">
            <SimpleGrid cols={3}>
              <NumberInput
                label="Peak Systolic(mmHg)"
                {...form.getInputProps("AVt3t1")}
              />
              <NumberInput
                label="Mean Systolic(mmHg)"
                {...form.getInputProps("AVt3t2")}
              />
            </SimpleGrid>
          </Fieldset>
          <Fieldset legend="AVA">
            <SimpleGrid cols={4}>
              <NumberInput
                label="By Planimetry(cmsq)"
                {...form.getInputProps("AVt3t3")}
              />
              <NumberInput
                label="Aortic Annulus(cm)"
                {...form.getInputProps("AVt3t4")}
              />
              <NumberInput
                label="Aorta at Sinus (cm)"
                {...form.getInputProps("AVt3t5")}
              />
              <NumberInput
                label="Ascending Arota at STJ (cm)"
                {...form.getInputProps("AVt3t6")}
              />
            </SimpleGrid>
          </Fieldset>
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Aortic Regurgitation"
          data={["Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("AVt4")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("AVt4Container").style.display = "none";
            } else {
              document.getElementById("AVt4Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: the below container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="AVt4Container">
          <SimpleGrid cols={3}>
            <NumberInput
              label="AR Jet PHT(msec)"
              {...form.getInputProps("AVt4t1")}
            />
            <NumberInput
              label="AR Vena Contractra(mm)"
              {...form.getInputProps("AVt4t2")}
            />
            <NumberInput
              label="AR Jet(msec)"
              {...form.getInputProps("AVt4t3")}
            />
          </SimpleGrid>
        </Container>

        {/* TV -> Tricuspid valve */}
        <Title className={classes.padding10} order={2}>
          TRICUSPID VALVE
        </Title>

        <NativeSelect
          className={classes.padding10}
          label="Morphology"
          data={["Normal", "Abnormal", "Select"]}
          {...form.getInputProps("TVt1")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Normal") {
              document.getElementById("TVt1Container").style.display = "none";
            } else {
              document.getElementById("TVt1Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: this container will be hidden if the value is Normal */}
        <Container style={{ display: "none" }} id="TVt1Container">
          <MultiSelect
            className={classes.padding10}
            // label="BASAL LV"
            placeholder="Pick value"
            data={[
              "Thickened",
              "Doming",
              "Calcified",
              "Restricted Mobility",
              "Fixed",
              "Vegetation",
              "Non-Coapting",
              "Prolapsed",
            ]}
            {...form.getInputProps("TVt1t1")}
          />
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Triscupid Stenosis"
          data={["Select", "Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("TVt2")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("TVt2Container").style.display = "none";
            } else {
              document.getElementById("TVt2Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: this container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="TVt2Container">
          <Fieldset legend="Gradient">
            <SimpleGrid cols={3}>
              <NumberInput
                label="Peak Diastolic(mmHg)"
                {...form.getInputProps("TVt2t1")}
              />
              <NumberInput
                label="Mean Diastolic(mmHg)"
                {...form.getInputProps("TVt2t2")}
              />
            </SimpleGrid>
          </Fieldset>
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Triscupid Regurgitation"
          data={["Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("TVt3")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("TVt3Container").style.display = "none";
            } else {
              document.getElementById("TVt3Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: this container will be absent if the value is Absent */}
        <Container style={{ display: "none" }} id="TVt3Container">
          <SimpleGrid cols={4}>
            <NumberInput
              label="RVSP(mmHg)=RAP+"
              {...form.getInputProps("TVt3t1")}
            />
            <NumberInput
              label="TRJV(cm/sec)"
              {...form.getInputProps("TVt3t2")}
            />
            <NativeSelect
              label="Pulmonary Hypertension"
              data={["None", "Mild", "Moderate", "Severe"]}
              {...form.getInputProps("TVt3t3")}
            />
            <NumberInput
              label="Triscupid Annulus(cm)"
              {...form.getInputProps("TVt3t4")}
            />
          </SimpleGrid>
        </Container>

        {/* PV -> Pulmonary valve */}
        <Title className={classes.padding10} order={2}>
          PULMONARY VALVE
        </Title>

        <NativeSelect
          className={classes.padding10}
          label="Morphology"
          data={["Normal", "Abnormal", "Select"]}
          {...form.getInputProps("PVt1")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Normal") {
              document.getElementById("PVt1Container").style.display = "none";
            } else {
              document.getElementById("PVt1Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: the below container will be hidden if the value is Normal in above select */}
        <Container style={{ display: "none" }} id="PVt1Container">
          <MultiSelect
            className={classes.padding10}
            // label="BASAL LV"
            placeholder="Pick value"
            data={["Thickened", "Atresia", "Calcification", "Vegetation"]}
            {...form.getInputProps("PVt1t1")}
          />
        </Container>

        <NumberInput
          className={classes.padding10}
          label="Doppler"
          description="Peak Systolic Velocity (cm/sec)"
          {...form.getInputProps("PVt2")}
        />

        <NativeSelect
          className={classes.padding10}
          label="Pulmonary Stenosis"
          data={["Select", "Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("PVt3")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("PVt3Container").style.display = "none";
            } else {
              document.getElementById("PVt3Container").style.display = "block";
            }
          }}
        />

        {/* NOTE: the below container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="PVt3Container">
          <Fieldset legend="Gradient">
            <SimpleGrid cols={3}>
              <NumberInput
                label="Peak Systolic(mmHg)"
                {...form.getInputProps("PVt3t1")}
              />
              <NumberInput
                label="Mean Systolic(mmHg)"
                {...form.getInputProps("PVt3t2")}
              />
            </SimpleGrid>
          </Fieldset>
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Pulmonary Regurgitation"
          data={["Absent", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("PVt4")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("PVt4Container").style.display = "none";
            } else {
              document.getElementById("PVt4Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: the below container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="PVt4Container">
          <SimpleGrid cols={3}>
            <NumberInput
              label="Early DG(mmHg)"
              {...form.getInputProps("PVt4t1")}
            />
            <NumberInput
              label="End DG(mmHg)"
              {...form.getInputProps("PVt4t2")}
            />
          </SimpleGrid>
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Pulmonary Artery"
          data={["Normal", "select", "Dilated", "Small"]}
          {...form.getInputProps("PVt5")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Normal") {
              document.getElementById("PVt5Container").style.display = "none";
            } else {
              document.getElementById("PVt5Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: the below container will be hidden if the value is Normal */}
        <Container style={{ display: "none" }} id="PVt5Container">
          <SimpleGrid cols={3}>
            <NumberInput label="MPA(mm)" {...form.getInputProps("PVt5t1")} />
            <NumberInput label="RPA(mm)" {...form.getInputProps("PVt5t2")} />
            <NumberInput label="LPA(mm)" {...form.getInputProps("PVt5t3")} />
          </SimpleGrid>
        </Container>

        <NativeSelect
          className={classes.padding10}
          label="Pericardial Effusion"
          data={["Absent", "Minimal", "Mild", "Moderate", "Severe"]}
          {...form.getInputProps("PVt6")}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Absent") {
              document.getElementById("PVt6Container").style.display = "none";
            } else {
              document.getElementById("PVt6Container").style.display = "block";
            }
          }}
        />
        {/* NOTE: the below container will be hidden if the value is Absent */}
        <Container style={{ display: "none" }} id="PVt6Container">
          <SimpleGrid cols={3}>
            <NumberInput
              label="Anterior to RV(mm)"
              {...form.getInputProps("PVt6t1")}
            />
            <NumberInput
              label="Posterior to LV(mm)"
              {...form.getInputProps("PVt6t2")}
            />
            <NumberInput
              label="Lateral(mm)"
              {...form.getInputProps("PVt6t3")}
            />
          </SimpleGrid>
        </Container>

        {/* <Title className={classes.padding10} order={3}>
          Remarks
        </Title>
        <TextEditor className={classes.padding10} />
        <Title className={classes.padding10} order={3}>
          IMPRESSION
        </Title>
        <TextEditor className={classes.padding10} />
        <Title className={classes.padding10} order={3}>
          PLAN
        </Title>
        <TextEditor className={classes.padding10} /> */}

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}

export default EchoForm;
