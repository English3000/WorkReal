json.extract! @project, :id, :role_id, :project, :location, :start_date,
                        :end_date, :review, :rating
json.real_ids do
  json.array! @project.real_ids.reverse
end
