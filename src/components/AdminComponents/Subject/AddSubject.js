import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { DatePicker, Checkbox } from "antd";
import { subjectsUpApi } from "../../../api/subjects";
import { getAccessToken } from "../../../api/auth";
import "./AddSubject.scss";

export default function EditSubject(props) {
  const { setIsVisibleModal, setReloadSubjects } = props;
  const [subjectData, setSubjectData] = useState({});

  const addSubject = (event) => {
    event.preventDefault();

    if (
      !subjectData.department ||
      !subjectData.academic_activity ||
      !subjectData.number_credits ||
      !subjectData.piaa_version ||
      !subjectData.piaa_status ||
      !subjectData.file_date ||
      !subjectData.theory_hours ||
      !subjectData.offsite_hours ||
      !subjectData.hoursnon_attendance_reprovals ||
      !subjectData.last_chance ||
      !subjectData.duration_semester ||
      !subjectData.practical_hours ||
      !subjectData.presential_teacher_hours ||
      !subjectData.maximum_quotas ||
      !subjectData.passing_score ||
      !subjectData.weeks_duration
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessToken();

      subjectsUpApi(accesToken, subjectData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadSubjects(true);
          setSubjectData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };

  return (
    <div className="add-subject-form">
      <AddForm
        subjectData={subjectData}
        setSubjectData={setSubjectData}
        addSubject={addSubject}
      />
    </div>
  );
}

const AddForm = (props) => {
  const { subjectData, setSubjectData, addSubject } = props;
  const { Option } = Select;

  return (
    <Form className="form-add">
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
                                    academic_activity: e.target.value
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
                                    activity_code: e.target.value
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
                                    number_credits: e.target.value
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
                                setSubjectData({ ...subjectData, duration_semester: e.target.value })
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
                                setSubjectData({ ...subjectData, practical_hours: e.target.value })
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
                                setSubjectData({ ...subjectData, presential_teacher_hours: e.target.value })
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
                                setSubjectData({ ...subjectData, maximum_quotas: e.target.value })
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
                                setSubjectData({ ...subjectData, passing_score: e.target.value })
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
                                setSubjectData({ ...subjectData, weeks_duration: e.target.value })
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                    onClick={addSubject}
                >
                    Crear Materia
                </Button>
            </Form.Item>
        </Form>
  );
};
