class ProjectsController < ApplicationController

  def index
  	@projects = Project.all
  end

  def update
    Todo.find(params[:commit]).update(isCompleted:params[:isCompleted])
    redirect_to :root
  end

end
