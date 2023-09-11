import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { DatePicker, Checkbox } from "antd";
import { getAccessToken } from "../../../api/auth";

import "./EditSubject.scss";

export default function EditSubjectForm(props) {
  const { subject, setIsVisibleModal, setReloadSubjects } = props;
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    setSubjectData({
      department: subject.department,
      academic_activity: subject.academic_activity,
      number_credits: subject.number_credits,
      piaa_version: subject.piaa_version,
      piaa_status: subject.piaa_status,
      file_number: {
        month_file: subject.month_file,
        year_file: subject.year_file,
      },
      file_date: subject.file_date,
      theory_hours: subject.theory_hours,
      offsite_hours: subject.avatar,
      hoursnon_attendance_reprovals: subject.hoursnon_attendance_reprovals,
      last_chance: subject.last_chance,
      duration_semester: subject.duration_semester,
      practical_hours: subject.practical_hours,
      presential_teacher_hours: subject.presential_teacher_hours,
      maximum_quotas: subject.maximum_quotas,
      passing_score: subject.passing_score,
      weeks_duration: subject.weeks_duration,
    });
  }, [subject]);

  const updateSubject = () => {
    const token = getAccessToken();
    let subjectUpdate = subjectData;

    if (
      !subjectUpdate.department ||
      !subjectUpdate.academic_activity ||
      !subjectUpdate.number_credits ||
      !subjectUpdate.piaa_version ||
      !subjectUpdate.piaa_status ||
      !subjectUpdate.file_date ||
      !subjectUpdate.theory_hours ||
      !subjectUpdate.offsite_hours ||
      !subjectUpdate.hoursnon_attendance_reprovals ||
      !subjectUpdate.last_chance ||
      !subjectUpdate.duration_semester ||
      !subjectUpdate.practical_hours ||
      !subjectUpdate.presential_teacher_hours ||
      !subjectUpdate.maximum_quotas ||
      !subjectUpdate.passing_score ||
      !subjectUpdate.weeks_duration
    ) {
      notification["error"]({
        message: "todos los valores son obligatorios.",
      });
      return;
    }
    updateSubject(token, subjectUpdate, subject._id).then((result) => {
      notification["success"]({
        message: result.message,
      });
      setIsVisibleModal(false);
      setReloadSubjects(true);
    });
  };

  return (
    <div className="edit-subject-form">
      <EditForm
        subjectData={subjectData}
        setSubjectData={setSubjectData}
        updateSubject={updateSubject}
      />
    </div>
  );
}

function EditForm(props) {
  const { subjectData, setSubjectData, updateSubject } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onFinish={updateSubject}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Departamento"
              value={subjectData.department}
              onChange={(e) =>
                setSubjectData({ ...subjectData, department: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Actividad académica"
              value={subjectData.academic_activity}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  academic_activity: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Código de actividad académica"
              value={subjectData.activity_code}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  activity_code: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Número de créditos"
              value={subjectData.number_credits}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  number_credits: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Versión del PIAA"
              value={subjectData.piaa_version}
              onChange={(e) =>
                setSubjectData({ ...subjectData, piaa_version: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="piaa_status"
              value={subjectData.piaa_status}
              onChange={(e) =>
                setSubjectData({ ...subjectData, piaa_status: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="piaa_status"
              onChange={(e) => setSubjectData({ ...subjectData, role: e })}
              value={subjectData.role}
            >
              <Option value="active">Administrador</Option>
              <Option value="inactive">Editor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="Fecha del acta"
              value={subjectData.file_date}
              onChange={(e) =>
                setSubjectData({ ...subjectData, file_date: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Horas teóricas"
              value={subjectData.theory_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  theory_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Horas prácticas"
              value={subjectData.offsite_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  offsite_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Horas para perder por inasistencia"
              value={subjectData.hoursnon_attendance_reprovals}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  hoursnon_attendance_reprovals: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Checkbox
              value={subjectData.last_chance}
              onChange={(e) =>
                setSubjectData({ ...subjectData, last_chance: e.target.value })
              }
            >
              ¿Habilitable?
            </Checkbox>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Duración en semestres"
              value={subjectData.duration_semester}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  duration_semester: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Horas prácticas"
              value={subjectData.practical_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  practical_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Horas presenciales profesor"
              value={subjectData.presential_teacher_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  presential_teacher_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="maximum_quotas"
              value={subjectData.maximum_quotas}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  maximum_quotas: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Nota aprobatoria"
              value={subjectData.passing_score}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  passing_score: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Duración en semanas"
              value={subjectData.weeks_duration}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  weeks_duration: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar materia
        </Button>
      </Form.Item>
    </Form>
  );
}
