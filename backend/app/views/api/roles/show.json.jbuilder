# json.role do
#   json.extract! @role
#   json.array! @role.projects.pluck(:id)
# end
#
# json.projects do
#   @role.projects.each do |project|
#     json.set! project.id do
#       json.extract! project, :project, :location,
#     end
#   end
# end
